import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Counter = ({ amount, onAdd, onSubstraction, small }) => {
  return (
    <div className="flex w-fit items-center justify-between gap-6 rounded-full bg-slate-200 py-2 px-4">
      <button
        type="button"
        onClick={onSubstraction}
        className={`cursor-pointer rounded-full bg-gray-300 p-2 shadow`}
      >
        {small ? (
          <AiOutlineMinus size={18} className="text-slate-800" />
        ) : (
          <AiOutlineMinus size={24} className="text-slate-800" />
        )}
      </button>
      <p className="text-lg font-bold text-slate-800">{amount}</p>
      <button
        type="button"
        onClick={onAdd}
        className="cursor-pointer rounded-full bg-green-400 p-2 shadow"
      >
        {small ? (
          <AiOutlinePlus size={18} className="text-slate-800" />
        ) : (
          <AiOutlinePlus size={24} className="text-slate-800" />
        )}
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  amount: PropTypes.number,
  onAdd: PropTypes.func,
  onSubstraction: PropTypes.func,
  small: PropTypes.bool
};
