import Input from '../form/Input';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
  return (
    <div className="flex items-center gap-3">
      <Input placeholder="cari produk" type="text" rounded />
      <button type="submit" className="rounded-full bg-slate-200 p-4">
        <AiOutlineSearch size={24} className="text-slate-700" />
      </button>
    </div>
  );
};

export default SearchForm;
