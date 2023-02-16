import { Counter, Gap } from '../../components';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CardProduct = () => {
  const [amount, setAmount] = useState(0);

  const onAdd = () => {
    setAmount(amount + 1);
  };

  const onSubstraction = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="mb-4 flex h-fit w-full items-start justify-between rounded border-2 border-slate-200 bg-slate-100 p-2">
      <div className="flex items-start gap-4">
        <div className="h-[100px] w-[100px] overflow-hidden rounded shadow">
          <img
            src=" https://akcdn.detik.net.id/visual/2020/06/02/09fb4d2c-e9d4-4949-b26d-969983c4bd54_169.jpeg?w=650"
            alt="product pict"
            className="h-full w-full overflow-hidden object-cover"
          />
        </div>
        <div>
          <p className="text-lg capitalize text-slate-700">tepung terigu 1 kg</p>
          <Gap height={5} />
          <p className="text-base font-bold text-slate-700">Rp 20.000</p>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end">
        <div className="flex w-fit cursor-pointer items-center justify-center rounded-full bg-slate-100 p-2 shadow">
          <AiOutlineDelete size={20} className="text-red-500" />
        </div>
        <Counter small onAdd={onAdd} onSubstraction={onSubstraction} amount={amount} />
      </div>
    </div>
  );
};

export default CardProduct;
