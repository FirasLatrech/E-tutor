import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'modules/shared/components/ui/select';

export default function StudentsFeedbackSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] text-gray-700">
        <SelectValue placeholder="Rating" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-gray-700 ">
          <SelectLabel>Rating</SelectLabel>
          <SelectItem value="apple">5 Star Rating</SelectItem>
          <SelectItem value="banana">4 Star Rating</SelectItem>
          <SelectItem value="blueberry">3 Star Rating</SelectItem>
          <SelectItem value="grapes">2 Star Rating</SelectItem>
          <SelectItem value="pineapple">1 Star Rating</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
