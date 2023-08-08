import {IProduct} from "lib/data/products"
import Pricing from "#/ui/Pricing"
import BuggyButton from "#/ui/example/BuggyButton"
import Carousel from "#/ui/example/Carousel"
import Footer from "#/ui/example/Footer"
export default function Page() {
    //let accounts: NavItem[] = [{ name:"",link:"/1", description: `To user 1`}]
  const priceProp :{ 
    theProduct: IProduct,
    cartCount: number} = {
    theProduct: {
        id: "Id",
        
        stock: 5,
        rating: 5,
        name: "placeHolder",
        description: "placeHolder",
        price:{
            amount: 6,
            currency: {
                code: "string",
                base: 6,
                exponent: 1,
            },
            scale: 1,
        },
        isBestSeller: false,
        leadTime: 5,
      
    },
    cartCount: 5
  }
  return (
      <div className="space-y-8 bg-gradient-to-bl">
        <h1 className="text-xl font-medium text-gray-300">Example ui</h1>
        <div className="space-y-10">
          <Pricing  product={priceProp["theProduct"]}
                    cartCount={5}/>
          <BuggyButton/>
          <div>
            <p>Carousel</p>
            <Carousel/>
          </div>
          <div>
            <p>Header</p>
            <Footer  reactVersion={17}
  nextVersion={13}/>
          </div>
        </div>
      </div>
    )
  }