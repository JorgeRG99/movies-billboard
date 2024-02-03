import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shadcn/components/table";
import { WEB_ROUTES } from "../config";
import { Link } from "react-router-dom";

export default function Tickets() {
  const { tickets } = useSelector((state) => state.tickets);

  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center min-h-[82.7vh] gap-20 px-80 py-40 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      {tickets.length > 0 ? (
        <Table>
          <TableCaption>A list of your tickets.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-primary-violet">
                Film
              </TableHead>
              <TableHead className="text-primary-violet">Hour</TableHead>
              <TableHead className="text-primary-violet">Quantity</TableHead>
              <TableHead className="text-right text-primary-violet">
                Seat
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell className="font-medium">{ticket.film}</TableCell>
                <TableCell>{ticket.hour}</TableCell>
                <TableCell>{ticket.quantity}</TableCell>
                <TableCell className="text-right">{ticket.seat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-lg flex flex-col items-center justify-center gap-8">
          <p>You haven&apos;t bought any tickets yet</p>

          <Link
            to={WEB_ROUTES.billboard}
            className="text-sm bg-primary-violet px-3 py-2 rounded-lg hover:opacity-85"
          >
            GET TICKET
          </Link>
        </div>
      )}
    </section>
  );
}
