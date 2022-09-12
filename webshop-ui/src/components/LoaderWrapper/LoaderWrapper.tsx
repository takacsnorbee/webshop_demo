import { useSelector } from 'react-redux';
import Loader from '../../common/Loader/Loader';
import { LoaderState } from '../../store/loader/types';
import { isLoading } from '../../store/selectors';

export default function LoaderWrapper(): JSX.Element {
    const loader: LoaderState = useSelector(isLoading);

    return (
      <div>
        {loader && <Loader />}
      </div>
    );
}
