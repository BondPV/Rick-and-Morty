import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';
import { GLOBAL_STYLES } from '../../constants/Constants';

const MainPage = (): JSX.Element => (
  <div className={GLOBAL_STYLES.CONTAINER}>
    <Search />
    <Cards />
  </div>
);

export { MainPage };
