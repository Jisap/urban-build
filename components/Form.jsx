import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input"
import { Textarea } from "@/components/ui/textarea"
import Button from "./Button"



function Form() {
  return (
    <form>
      <Input 
        type="fullname"
        placeholder="Full Name"
      />
      <Input 
        type="email"
        placeholder="Email address"
      />
      <div>
        <Input 
          type="phone"
          placeholder="Phone number"
        />
        <Select>
          <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
            <SelectValue placeholder="Select a service"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="construction">
                Construction
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  )
}

export default Form