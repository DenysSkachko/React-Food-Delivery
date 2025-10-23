import Button from "../../ui/Button"
import { IoIosOptions } from "react-icons/io";
const Product = () => {
  return (
    <div className="p-6">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Products Management</h2>
            <Button variant="set">
                <IoIosOptions className="size-6 mr-2"/> Manage Categories
            </Button>
        </div>

    </div>
  )
}

export default Product