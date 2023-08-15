"use client";

import Image from 'next/image'

import { useStoreModal } from '@/hooks/use-store-modal';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { Button } from '@/components/ui/button';


export default function Home() {
  const { onOpen, isOpen } = useStoreModal((state) => ({ onOpen: state.onOpen, isOpen: state.isOpen }));

  useEffect(() => {
    if (!isOpen) {
    }
  }, [isOpen, onOpen])

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://anapioficeandfire.com/api/characters')
        .then((res) => res.data),
  })



  return (

    < div className="relative isolate px-6 pt-14 lg:px-8" >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-muted/50 hover:ring-muted/100">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Layerspace
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect instantly with local 3D printers to bring your designs to life, or monetize your printer by supplying parts on-demand, all in one seamless platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
            >
              Get started
            </Button>
            <Button variant="ghost">
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
    </div >
  )
}

{/* {
        isLoading ? (
          <div>Loading...</div>
        ) : (

          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-6xl font-bold">
              Welcome to <a className="text-blue-600" href="https://nextjs.org">An API of Ice and Fire!</a>
            </h1>
            <div className='grid grid-cols-3 gap-x-12 justify-center items-center space-y-2'>

              {data.map((item: any) => (
                <Card className='w-[200px] h-[200px]' key={item?.name}>
                  <CardHeader>
                    <CardTitle>Name: {item?.name}</CardTitle>
                    <CardDescription>{item?.culture}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Gender: {item?.gender}</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              ))}
            </div>

          </div>
        )


      } */}

