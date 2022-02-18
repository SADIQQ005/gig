import { AuthProvider } from '../contexts/AuthContext'
import { ProductProvider } from '../contexts/ProductContext';
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </AuthProvider>
  );
}

export default MyApp
