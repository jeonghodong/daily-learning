import { Stock } from '@/src/mocks/mockWebSocket';
import { CSSProperties } from 'react';

const Row = ({
  ariaAttributes,
  index,
  style,
  stocks,
}: {
  ariaAttributes: {
    'aria-posinset': number;
    'aria-setsize': number;
    role: string;
  };
  index: number;
  style: CSSProperties;
  stocks: Stock[];
}) => {
  const stock = stocks[index];
  return (
    <div
      {...ariaAttributes}
      style={style}
      className="border-b flex items-center px-4 hover:bg-gray-50"
    >
      <span className="flex-1 font-medium">{stock.id}</span>
      <span className="flex-1">{stock.name}</span>
      <span
        className={`flex-1 text-right font-mono ${stock.priceDelta > 0 ? 'text-red-500' : 'text-blue-500'}`}
      >
        {stock.price.toLocaleString()}원
      </span>
    </div>
  );
};

export default Row;
