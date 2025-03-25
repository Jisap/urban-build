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
    <form className="flex flex-col">
      <div className="flex flex-col gap-20px mb-[20px]">
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
                <SelectItem value="renovation">
                  Renovation
                </SelectItem>
                <SelectItem value="restoration">
                  Restoration
                </SelectItem>
                <SelectItem value="Consulting">
                  Consulting
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className="h-[180px] resize-none rounded-none"
          placeholder="Enter your message"
        />
        {/* btn */}
        <Button
          text="Send Message"
        >
          Send Message
        </Button>
      </div>
    </form>
  )
}

export default Form