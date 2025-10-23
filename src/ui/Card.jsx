const Card = ({name, price, text}) => {
  return (
    <div className="pt-8.5 w-48 relative">
        <img src="/dish1.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2" width={132} height={132}/>
        <div className="bg-dark h-56.5 rounded-lg">
            <div className="flex flex-col justify-end h-full p-6 text-sm text-center">
                <h4 className="font-medium mb-2">{name}</h4>
                <p>{price}</p>
                <p className="text-light-alt mt-1">{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card