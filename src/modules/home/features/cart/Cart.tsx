import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { X } from 'lucide-react';
import {
  useCheckOut,
  useCourseDetailsByIds,
} from 'modules/home/data/queries/home.query';
import Button from 'modules/shared/components/Button';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { useToast } from 'modules/shared/components/ui/use-toast';
import useAuthStore from 'modules/shared/store/useAuthStore';
import useCartStore from 'modules/shared/store/useCartStore';
import { type ICourse } from 'modules/shared/types/course';
import { BreadcrumbWithCustomSeparator } from '../courseDetails/_components/BreadcrumbWithCustomSeparator';

function Cart() {
  const { mutateAsync: courseDetailsByIds } = useCourseDetailsByIds();
  const { mutateAsync: checkOut } = useCheckOut();
  // const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(window.location.search);

  const { toast } = useToast();
  const { isAuthenticated } = useAuthStore();
  console.log(isAuthenticated);
  const { data, setData } = useCartStore();

  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const results = await courseDetailsByIds(data);
        setCourseDetails(results);
      }
    };
    fetchData();
  }, [courseDetailsByIds, data]);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!data) return;
    const checkout = await checkOut(data);
    if (isAuthenticated) {
      window.location = checkout?.url;
    } else {
      navigate('/login');
    }
  };
  useEffect(() => {
    if (searchParams.get('success')) {
      toast({
        variant: 'success',
        title: 'Payment successful',
        action: (
          <ToastAction altText="Close">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
      setCourseDetails([]);
      setData([]);
    }

    if (searchParams.get('canceled')) {
      toast({
        variant: 'error',
        title: 'Payment was canceled',
        action: (
          <ToastAction altText="Close">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
    }
  }, []);

  return (
    <div className="h-full">
      <div className="w-full bg-gray-50 h-[150px]">
        <div className="flex flex-col items-center justify-center h-full gap-y-6">
          <div className="text-[#1D2026] text-xl font-[600]">Checkout</div>
          <div>
            <BreadcrumbWithCustomSeparator />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full min-h-[500px]">
        {/* payment */}
        <div className="w-[80%] p-6">
          <div className=" border border-gray-100 w-[30rem]">
            <div className="p-2 ">
              <span className="text-xl font-[600]">
                Courses {courseDetails.length}
              </span>
            </div>
            <div className="flex flex-col pb-3 border-b border-gray-100">
              {courseDetails.map((item: ICourse, index: number) => (
                <div className="flex p-2 gap-x-3" key={index}>
                  <div>
                    <img
                      src={item?.course_thumbnail}
                      alt=""
                      className="w-[130px] h-[100px]"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div className="flex items-center gap-x-3">
                      {item.instructor.map((instructor, index) => (
                        <React.Fragment key={index}>
                          <span className="text-gray-400 text-[14px]">
                            Course by:
                          </span>
                          <span className="text-[14px] font-[500]">
                            {instructor?.firstName} {instructor?.lastName}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    <div>{item?.title}</div>
                    <div className="text-[15px] text-primary-500 font-[500]">
                      ${item?.course_price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4">
              <div className="flex justify-between w-full">
                <div className="text-gray-900 text-[14px]">Total:</div>
                <div>
                  ${' '}
                  {courseDetails.reduce(
                    (accumulator, currentCourse: ICourse) =>
                      accumulator + parseFloat(currentCourse?.course_price),
                    0
                  )}{' '}
                  usd
                </div>
              </div>
            </div>
            <div className="w-full p-2">
              <Button
                text="Complete Payment"
                size="lg"
                className="w-full"
                disabled={data.length === 0}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
