

const Subscribe = () => {
    return (
        <div className="my-48  bg-base-200">
            <div className="flex items-center justify-between py-24 w-full max-w-6xl mx-auto">
            
              <h1 className="text-4xl">Subscribe To Our News Letter</h1>
                <div className="form-control w-full max-w-xs relative">
                    <input type="email" placeholder="Your Email Address" className="input input-bordered w-full max-w-xs" />
                    <input className="absolute right-0 py-3 px-2 bg-[#18adc0] text-white rounded" type="button" value="Subscribe" />
                </div>
              
            
            </div>
        </div>
    );
};

export default Subscribe;