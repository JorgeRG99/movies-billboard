import Ticket from "./Icons/Ticket";

export function OpenBuyTicketDialog({ onOpenChange }) {
  return (
    <button
      onClick={onOpenChange}
      className="bg-primary-violet w-full py-2 rounded-md flex items-center justify-center gap-4 font-semibold hover:opacity-70 duration-300 ease-in-out"
    >
      BUY TICKET
      <Ticket />
    </button>
  );
}
