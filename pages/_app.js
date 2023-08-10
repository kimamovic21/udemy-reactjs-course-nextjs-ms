import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {  
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;



// object destructuring to pull informations out of the props