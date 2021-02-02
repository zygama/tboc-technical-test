/**
 * 4. Refac
 *
 * - My component can be simplified.
 * - I don't want to maintain all those rows.
 * - I don't want to maintain all those states.
 * - I want my refactored component to be heavily typed using TypeScript.
 */

import { FC, useState } from "react";

interface Order {
  member: string;
  code: string;
  order: number;
}

const Refac: FC<{}> = () => {
  const [member, setMember] = useState<string>();
  const [code, setCode] = useState<string>();
  const [order, setOrder] = useState<number>();

  const orderList: Order[] = [
    {
      member: "Guillaume",
      code: "ABCD",
      order: 1
    },
    {
      member: "Josian",
      code: "1234",
      order: 2
    },
    {
      member: "Jules",
      code: "EFGH",
      order: 3
    },
    {
      member: "Marvin",
      code: "IJKL",
      order: 4
    },
    {
      member: "Valery",
      code: "5678",
      order: 5
    },
    {
      member: "Fadi",
      code: "UVWX",
      order: 6
    },
    {
      member: "Dan",
      code: "91011",
      order: 7
    },
    {
      member: "Nicolas",
      code: "91011",
      order: 8
    },
    {
      member: "Emilie",
      code: "MNOP",
      order: 9
    },
    
  ];

  return (
    <div>
      <h1>My Refac</h1>
      <pre>
        You clicked on: {member || "—"} code: {code || "—"} order:{" "}
        {order || "—"}
      </pre>
      <table>
        <thead>
          <tr>
            <th>member</th>
            <th>code</th>
            <th>order</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr>
              <td
                onClick={() => {
                  setMember(order.member);
                  setCode(order.code);
                  setOrder(order.order);
                }}
              >
                {order.member}
              </td>
              <td>{order.code}</td>
              <td>{order.order}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Number of members</td>
            <td>{orderList.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Refac;
