const Analytics = () => {
    return (
        <div className="bg-[#EDF0F5] px-7 py-4">
            <div className="flex justify-between bg-[#FFFFFF] rounded-[20px] my-4">
                <div className="flex flex-col px-7 py-3">
                    <h1 className="text-[#0148B7] font-semibold text-[40px]">Task</h1>
                    <p className="text-[#232D40]">Hi, You have received <span className="text-[#0148B7]">four</span> tasks today. Submit the assignment within the
                        due date, Good luck !</p>
                </div>
                {/* <img alt="" src={Img} /> */}
            </div>
        </div>
    )
}

export default Analytics