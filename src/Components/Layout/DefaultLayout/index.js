import Header from '~/Components/Layout/components/Header';
import Siderbar from './Siderbar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Siderbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
