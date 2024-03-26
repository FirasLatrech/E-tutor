import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './../ui/select';

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] text-gray-700">
        <SelectValue placeholder="Browse" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-gray-700 ">
          <SelectLabel>Browse</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
