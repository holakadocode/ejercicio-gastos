import { useEffect, useState } from 'react';

export default function TotalBlock(props) {
  const { expenses } = props;
  const [total, setTotal] = useState(0);

  const recalculateTotal = () => {
    let tempTotal = 0;
    expenses?.map((expense) => (tempTotal += parseInt(expense.price)));
    setTotal(tempTotal);
  };

  useEffect(() => {
    recalculateTotal();
  }, [expenses]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col-10"></th>
          <th className="col-2 text-start">{`Total: ${total}€`}</th>
        </tr>
      </thead>
    </table>
  );
}
