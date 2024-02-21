import Ticket from "./Ticket"

function Entry() {
    return (
        <>
            <h1 className="text-2xl font-semibold m-2 mt-5">-- ENTRY --</h1>
            <form method="POST" action="http://localhost:4040/parking-lot/entry">
                <label htmlFor="vehicle_number" className="text-xl font-bold">
                    Vehicle Number:
                </label>
                <input type="text" name="vehicle_number" className="p-2 border border-black mx-5" placeholder="enter vehicle number" />
                <label htmlFor="size" className="text-xl font-bold">
                    size:
                </label>
                <input type="text" name="size" className="p-2 border border-black mx-5" placeholder="enter size" />
                <label htmlFor="id" className="text-xl font-bold">
                    id:
                </label>
                <input type="text" name="id" className="p-2 border border-black mx-5" placeholder="enter id" />
                <button className="bg-teal-300 p-2 rounded-sm border border-black" type="submit">GET TICKET</button>
            </form>

            <Ticket />
        </>
    )
}

export default Entry
