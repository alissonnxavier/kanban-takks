/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
 return (
  <div>
    <Input/>
    <Button variant='primary'>
      Click me!
    </Button>
    <Button variant='destructive'>
      Click me!
    </Button>
    <Button variant='secondary'>
      Click me!
    </Button>
    <Button variant='ghost'>
      Click me!
    </Button>
    <Button variant='muted'>
      Click me!
    </Button>
    <Button variant='teritary'>
      Click me!
    </Button>
  </div>
 )
}
