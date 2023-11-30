import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function EcommerceCard() {
    return (
        <>
        <h1 className="font-bold bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent text-4xl px-8 mt-6 flex justify-center items-center">Add Items</h1>
        <div className="flex p-12 flex-wrap lg:justify-between md:justify-center justify-center">
      <Card className="lg:w-96 md:w-96 w-full mt-6 ">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold">
              Add Location
            </Typography>
          
          </div>
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add
          </Button>
        </CardFooter>
      </Card>
      <Card className="lg:w-96 md:w-96 w-full mt-6 ">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="black" className="font-bold">
              Add Categories
            </Typography>
         
          </div>
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add
          </Button>
        </CardFooter>
      </Card>
      <Card className="lg:w-96 md:w-96 w-full mt-6 ">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://img.freepik.com/free-psd/empty-billboard-city_132075-5632.jpg?size=626&ext=jpg&ga=GA1.1.378971825.1690805022&semt=sph"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="black" className="font-bold">
              Add Services
            </Typography>
           
          </div>
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
           Add
          </Button>
        </CardFooter>
      </Card>
      </div>
      </>
    );
  }