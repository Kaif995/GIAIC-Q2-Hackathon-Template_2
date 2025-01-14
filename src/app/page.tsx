import { HeroSection } from "@/components/furniture/hero/HeroSection"
import { BrandFeatures } from "@/components/features/BrandFeatures/BrandFeatures"
import { client } from "@/sanity/lib/client"
import { urlForImage } from '@/sanity/lib/image'; // Adjust the import path
import { Image as IImage } from "sanity";
import Image from 'next/image';
import Link from "next/link";



interface Iproduct {
  title: string,
  _id: string,
  category: {
    name: string
  },
  image: IImage,
  price: number
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    price,
    image,
    category ->
    {
      name
    },
    }`)
  return res
}
export default async function Home() {


  const data: Iproduct[] = await getProductData();
  console.log(data);


  return (
    <>
      <HeroSection />
      <div className="flex justify-center flex-wrap">
        {data.map((item) => (

          <Link key={item._id} href={`/products/${item._id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className=" p-4 w-full">
              <div className="block relative h-46 rounded overflow-hidden">
                <div key={item._id}>
                  <Image
                    width={300}
                    height={300}
                    src={urlForImage(item.image).url()} alt="product" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.category.name}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">${item.price.toFixed(2)}</p>
                {/* <p className="text-sm text-gray-500">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p> */}
              </div>
            </div>
          </Link>


        ))}
      </div>
      <BrandFeatures />
    </>
    // // <>
    // <img src={urlForImage(data.imageUrl).width(200).url()} />



    // </>
  );
}
