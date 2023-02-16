import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Gap from '../ui/Gap';
import { AiOutlinePlus } from 'react-icons/ai';

const CardProduct = () => {
  return (
    <Link to={'/product/1'} className="w-[300px] rounded-lg p-5 hover:bg-white hover:shadow-lg">
      <div className="overflow-hidden rounded shadow">
        <img
          src="https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650"
          alt="product pict"
          className="h-full w-full object-cover"
        />
      </div>
      <Gap height={10} />
      <p className="truncate text-xl font-bold text-slate-800">laptop sekolah Lenovo G002</p>
      <Gap height={5} />
      <p className="text-base text-slate-700">Rp 20.000.000</p>
      <Gap height={20} />
      <Button small>
        <div className="flex items-center justify-center gap-2">
          <AiOutlinePlus size={18} /> keranjang
        </div>
      </Button>
    </Link>
  );
};

export default CardProduct;
