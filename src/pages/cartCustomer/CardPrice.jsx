import { Button } from '../../components';

const CardPrice = () => {
  return (
    <div className="flex h-[200px] w-[250px] flex-col justify-between rounded-lg bg-slate-200 p-4">
      <div>
        <p className="text-lg text-slate-700">total biaya</p>
        <p className="text-2xl font-bold text-slate-800">Rp 500.000</p>
      </div>
      <Button>bayar sekarang</Button>
    </div>
  );
};

export default CardPrice;
