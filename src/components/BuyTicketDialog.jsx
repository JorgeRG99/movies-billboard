import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../shadcn/components/alert-dialog";
import { Plus } from "./Icons/Plus";
import Minus from "./Icons/Minus";

export function BuyTicketDialog({ open = false, onOpenChange, movieInfo }) {
  const [quantity, setQuantity] = useState(1);

  const incrementValue = () => setQuantity((prevState) => prevState + 1);
  const decrementValue = () =>
    setQuantity((prevState) => (prevState !== 0 ? prevState - 1 : prevState));

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-[1.5em]">
            Ticket for{" "}
            <span className="text-primary-violet">{movieInfo.Title}</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-8 text-[.95em] py-6">
            <p>
              Welcome to our online ticketing system! To continue with your
              purchase, please select the number of tickets you require and
              choose your preferred showtime.
            </p>
            <p>
              Once you&apos;ve made your selections, click the
              &apos;Confirm&apos; button to proceed to payment. Enjoy your movie
              experience!
            </p>
            <div className="w-full flex justify-evenly items-center">
              <div className="w-[30%] flex flex-col items-center gap-2">
                Quantity
                <div className="flex justify-evenly items-center w-[6em] py-[.2em] text-[1.4em]">
                  <button
                    className="text-xl px-1 bg-primary-violet rounded-full h-6 w-6 flex items-center justify-center text-white"
                    onClick={decrementValue}
                  >
                    <Minus />
                  </button>
                  {quantity}
                  <button
                    className="text-xl px-1 bg-primary-violet rounded-full h-6 w-6 flex items-center justify-center text-white"
                    onClick={incrementValue}
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              <div className="w-[30%]">
                <label htmlFor="schedule">Schedule</label>
                <select
                  name="schedule"
                  className="border-2 border-gray-500 w-full p-1 rounded-md"
                >
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="16:00">16:00</option>
                  <option value="18:00">18:00</option>
                  <option value="20:00">20:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
              <div className="w-[30%]">
                <label htmlFor="schedule">Seat</label>
                <select
                  name="schedule"
                  className="border-2 border-gray-500 w-full p-1 rounded-md"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center">
          <p className="text-primary-violet text-center font-semibold text-[1.1em]">
            Total: <span className="font-normal">{quantity * 9}$</span>
          </p>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
