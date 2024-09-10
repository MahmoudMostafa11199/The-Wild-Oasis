import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddCabin from '../ui/AddCabin';

import CabinTable from '../features/cabins/CabinTable';
import CabinTableOperstions from '../features/cabins/CabinTableOperstions';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperstions />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
