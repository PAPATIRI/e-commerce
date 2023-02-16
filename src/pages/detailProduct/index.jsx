import { useState } from 'react';
import { Button, Container, Counter, Gap } from '../../components';
import { AiOutlinePlus, AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const onAdd = () => {
    setAmount(amount + 1);
  };

  const onSubstraction = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="h-[calc(100vh-63px)] w-full bg-slate-100 pt-24">
      <Container>
        <div>
          <div className="flex items-center gap-2">
            <AiOutlineArrowLeft size={18} />
            <p className="text-base text-slate-700">kembali</p>
          </div>
          <Gap height={20} />
          <div className="flex items-start">
            <div className="flex-1">
              <div className="h-3/4 w-3/4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://cf.shopee.co.id/file/6ca9af67097c30c70859203cd084c536"
                  alt="product pict"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-700">ini adalah nama product</h1>
              <Gap height={20} />
              <p className="text-lg text-slate-700">
                ini adalah deskripsi produk, deskripsi ini harus panjang harusnya yak biar ada
                isinya nih di detail produk
              </p>
              <Gap height={20} />
              <p className="text-3xl font-bold text-slate-800">Rp 24.000</p>
              <Gap height={50} />
              <Counter amount={amount} onAdd={onAdd} onSubstraction={onSubstraction} />
              <Gap height={20} />
              <Button type="submit">
                <div className="flex items-center justify-center gap-2">
                  <AiOutlinePlus size={24} />
                  ke keranjang
                </div>
              </Button>
              <Gap height={10} />
              <Button onClick={() => navigate('/cart/1')} type="button" secondary>
                bayar sekarang
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
