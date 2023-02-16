import { Container, Gap } from '../../components';
import CardPrice from './CardPrice';
import CardProduct from './CardProduct';

const CartCustomer = () => {
  return (
    <div className="h-screen w-full bg-slate-100 pt-24">
      <Container large>
        <div>
          <h1 className="text-2xl font-medium text-slate-800">Keranjang syarif</h1>
          <div className="flex gap-4">
            <div className="flex-1">
              <Gap height={20} />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
            <CardPrice />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartCustomer;
