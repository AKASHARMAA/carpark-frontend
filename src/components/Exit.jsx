
function Exit() {
    return (
        <div>
            <h1 className="text-2xl font-semibold m-2 mt-5">-- EXIT --</h1>
            <form method="POST" action="http://localhost:4040/parking-lot/exit">
                <label htmlFor="ticket" className="text-xl font-bold">
                    Ticket:
                </label>
                <input type="text" name="ticket" className="p-2 border border-black mx-5" placeholder="enter ticket number" />
                <button className="bg-teal-300 p-2 rounded-sm border border-black" type="submit">RELEASE TICKET</button>
            </form>
        </div>
    )
}

export default Exit
