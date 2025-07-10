"use client";
import { useState, useRef } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import Container from "@/components/shared/Container";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import { DateTimePicker } from "@/components/ui/date-picker";
import CarRentalSkeleton from "@/components/skeletons/CarRentalSkeleton";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/animation/motionVariant";
import Link from "next/link";
import { envConfig } from "@/config";
import { useRouter } from "next/navigation";

// You'll need to add your Google Maps API key as an environment variable
const GOOGLE_MAPS_API_KEY = "AIzaSyDhzY2k-tIrpnoBut75TTDJTuE1kURA_fU";

// Libraries we need to load
const libraries = ["places"];

interface PlaceType {
  formatted_address?: string;
  name?: string;
  place_id?: string;
}

export default function RentCar() {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [pickupLocation, setPickupLocation] = useState<PlaceType | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<PlaceType | null>(
    null
  );
  const router = useRouter();

  // Input display values
  const [pickupInputValue, setPickupInputValue] = useState("New York, USA");
  const [dropoffInputValue, setDropoffInputValue] = useState("Delaware, USA");

  // Refs for the autocomplete instances
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );
  const dropoffAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );

  // Handle place selection for pickup location
  const handlePickupPlaceSelect = () => {
    if (pickupAutocompleteRef.current) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place) {
        setPickupLocation({
          formatted_address: place.formatted_address,
          name: place.name,
          place_id: place.place_id,
        });
        setPickupInputValue(place.formatted_address || place.name || "");
      }
    }
  };

  // Handle place selection for dropoff location
  const handleDropoffPlaceSelect = () => {
    if (dropoffAutocompleteRef.current) {
      const place = dropoffAutocompleteRef.current.getPlace();
      if (place) {
        setDropoffLocation({
          formatted_address: place.formatted_address,
          name: place.name,
          place_id: place.place_id,
        });
        setDropoffInputValue(place.formatted_address || place.name || "");
      }
    }
  };

  const handleRedirectCarPage = () => {
    router.push("/car-fleet");
  };

  // Handle pickup autocomplete load
  const onPickupAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    pickupAutocompleteRef.current = autocomplete;
  };

  // Handle dropoff autocomplete load
  const onDropoffAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    dropoffAutocompleteRef.current = autocomplete;
  };

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={libraries as any}
      loadingElement={
        <div>
          <Container>
            <CarRentalSkeleton></CarRentalSkeleton>{" "}
          </Container>
        </div>
      }
    >
      <Container>
        <motion.section
          variants={fadeUpVariants()}
          initial="initial"
          animate="animate"
          className=" relative"
        >
          <motion.div
            key={"rent-car"}
            variants={fadeUpVariants(2.0)}
            className="w-full  bg-white rounded-lg  border 2xl:p-3 xl:p-3 lg:p-2 md:p-4 p-2"
          >
            <div className="flex flex-col md:flex-row justify-between items-center 2xl:mb-3 mb-2">
              <h2 className="text-xl font-medium text-primary-black-gray">
                Need to rent a luxury car?
              </h2>
              <Link href="/car-fleet" className="text-sm text-primary-gray">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center  gap-4 md:border 2xl:p-3 p-2 rounded-lg">
              {/* Pick Up Location */}
              <div className="space-y-2 border-r">
                <label className="text-sm  font-bold text-primary-gray ">
                  Pick Up Location
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                  </div>
                  <Autocomplete
                    onLoad={onPickupAutocompleteLoad}
                    onPlaceChanged={handlePickupPlaceSelect}
                    options={{
                      types: ["(cities)"],
                      componentRestrictions: { country: "us" },
                    }}
                  >
                    <Input
                      className="pl-5 h-12 border-none shadow-none"
                      placeholder="Enter pickup location "
                      value={pickupInputValue}
                      onChange={(e) => setPickupInputValue(e.target.value)}
                    />
                  </Autocomplete>
                </div>
              </div>

              {/* Drop Off Location */}
              <div className="space-y-2  border-r">
                <label className="text-sm  font-bold text-primary-gray ">
                  Drop Off Location
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                  </div>
                  <Autocomplete
                    onLoad={onDropoffAutocompleteLoad}
                    onPlaceChanged={handleDropoffPlaceSelect}
                    options={{
                      types: ["(cities)"],
                      componentRestrictions: { country: "us" },
                    }}
                  >
                    <Input
                      className="pl-5 h-12 border-none shadow-none "
                      placeholder="Enter dropoff location border-none "
                      value={dropoffInputValue}
                      onChange={(e) => setDropoffInputValue(e.target.value)}
                    />
                  </Autocomplete>
                </div>
              </div>

              {/* Pick Up Date & Time */}
              <div className="space-y-2  border-r">
                <label className="text-sm  font-bold text-primary-gray ">
                  Pick Up Date & Time
                </label>
                <DateTimePicker value={pickupDate} onChange={setPickupDate} />
              </div>

              {/* Return Date & Time */}
              <div className="space-y-2  border-r">
                <label className="text-sm  font-bold text-primary-gray ">
                  Return Date & Time
                </label>
                <DateTimePicker
                  value={returnDate}
                  onChange={setReturnDate}
                  disableBefore={pickupDate}
                  placeholder="Drop Off"
                />
              </div>

              {/* Rent a Car Button */}
              <Button
                onClick={handleRedirectCarPage}
                className="bg-primary-cyan cursor-pointer hover:bg-cyan-600 text-white px-6 py-2 h-12 rounded-md group sm:col-span-2 lg:col-span-1"
              >
                Rent a Car
                <AnimatedArrow></AnimatedArrow>
              </Button>
            </div>

            <div className="flex justify-end mt-6"></div>
          </motion.div>
        </motion.section>
      </Container>
    </LoadScript>
  );
}
