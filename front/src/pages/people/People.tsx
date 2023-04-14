import {
  faBuilding,
  faCalendar,
  faEnvelope,
  faRectangleList,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faList, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import WithTopBarContainer from '../../layout/containers/WithTopBarContainer';
import Table from '../../components/table/Table';
import { Company } from '../../interfaces/company.interface';
import { Pipe } from '../../interfaces/pipe.interface';
import { createColumnHelper } from '@tanstack/react-table';
import styled from '@emotion/styled';
import CellLink from '../../components/table/CellLink';
import TableHeader from '../../components/table/TableHeader';
import personPlaceholder from './placeholder.png';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js';

type Person = {
  fullName: string;
  picture?: string;
  email: string;
  company: Company;
  phone: string;
  creationDate: Date;
  pipe: Pipe;
  city: string;
  countryCode: string;
};

const StyledPeopleContainer = styled.div`
  padding: 8px;
  width: 100%;

  table {
    margin-top: 8px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const defaultData: Array<Person> = [
  {
    fullName: 'Alexandre Prot',
    picture: personPlaceholder,
    email: 'alexandre@qonto.com',
    company: { id: 1, name: 'Qonto', logo: 'https://qonto.eu/logo.png' },
    phone: '06 12 34 56 78',
    creationDate: new Date('Feb 23, 2018'),
    pipe: { id: 1, name: 'Sales Pipeline', icon: 'faUser' },
    city: 'Paris',
    countryCode: 'FR',
  },
  {
    fullName: 'Alexandre Prot',
    picture: personPlaceholder,
    email: 'alexandre@qonto.com',
    company: { id: 1, name: 'Qonto', logo: 'https://qonto.eu/logo.png' },
    phone: '06 12 34 56 78',
    creationDate: new Date('Feb 23, 2018'),
    pipe: { id: 1, name: 'Sales Pipeline', icon: 'faUser' },
    city: 'Paris',
    countryCode: 'FR',
  },
  {
    fullName: 'Alexandre Prot',
    picture: personPlaceholder,
    email: 'alexandre@qonto.com',
    company: { id: 1, name: 'Qonto', logo: 'https://qonto.eu/logo.png' },
    phone: '06 12 34 56 78',
    creationDate: new Date('Feb 23, 2018'),
    pipe: { id: 1, name: 'Sales Pipeline', icon: 'faUser' },
    city: 'Paris',
    countryCode: 'FR',
  },
  {
    fullName: 'Alexandre Prot',
    picture: personPlaceholder,
    email: 'alexandre@qonto.com',
    company: { id: 1, name: 'Qonto', logo: 'https://qonto.eu/logo.png' },
    phone: '06 12 34 56 78',
    creationDate: new Date('Feb 23, 2018'),
    pipe: { id: 1, name: 'Sales Pipeline', icon: 'faUser' },
    city: 'Paris',
    countryCode: 'FR',
  },
  {
    fullName: 'Alexandre Prot',
    picture: personPlaceholder,
    email: 'alexandre@qonto.com',
    company: { id: 1, name: 'Qonto', logo: 'https://qonto.eu/logo.png' },
    phone: '06 12 34 56 78',
    creationDate: new Date('Feb 23, 2018'),
    pipe: { id: 1, name: 'Sales Pipeline', icon: 'faUser' },
    city: 'Paris',
    countryCode: 'FR',
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('fullName', {
    header: () => <TableHeader viewName="People" viewIcon={faUser} />,
    cell: (props) => (
      <CellLink
        name={props.row.original.fullName}
        picture={props.row.original.picture}
        href="#"
      />
    ),
  }),
  columnHelper.accessor('email', {
    header: () => <TableHeader viewName="Email" viewIcon={faEnvelope} />,
    cell: (props) => (
      <a href={`mailto:${props.row.original.email}`}>
        {props.row.original.email}
      </a>
    ),
  }),
  columnHelper.accessor('company', {
    header: () => <TableHeader viewName="Company" viewIcon={faBuilding} />,
    cell: (props) => (
      <CellLink
        name={props.row.original.company.name}
        picture={props.row.original.company.logo}
        href="#"
      />
    ),
  }),
  columnHelper.accessor('phone', {
    header: () => <TableHeader viewName="Phone" viewIcon={faPhone} />,
    cell: (props) => (
      <a
        href={parsePhoneNumber(
          props.row.original.phone,
          props.row.original.countryCode as CountryCode,
        )?.getURI()}
      >
        {parsePhoneNumber(
          props.row.original.phone,
          props.row.original.countryCode as CountryCode,
        )?.formatInternational() || props.row.original.phone}
      </a>
    ),
  }),
  columnHelper.accessor('creationDate', {
    header: () => <TableHeader viewName="Creation" viewIcon={faCalendar} />,
    cell: (props) =>
      new Intl.DateTimeFormat(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(props.row.original.creationDate),
  }),
  columnHelper.accessor('pipe', {
    header: () => <TableHeader viewName="Pipe" viewIcon={faRectangleList} />,
    cell: (props) => (
      <CellLink
        name={props.row.original.pipe.name}
        picture={props.row.original.pipe.icon}
        href="#"
      />
    ),
  }),
  columnHelper.accessor('city', {
    header: () => <TableHeader viewName="City" viewIcon={faMapPin} />,
  }),
];

function People() {
  return (
    <WithTopBarContainer title="People" icon={faUser}>
      <StyledPeopleContainer>
        <Table
          data={defaultData}
          columns={columns}
          viewName="All People"
          viewIcon={faList}
        />
      </StyledPeopleContainer>
    </WithTopBarContainer>
  );
}

export default People;