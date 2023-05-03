import { text } from "body-parser";
import React from "react";
import Button from "src/components/common/button-componets";
import Input from "src/components/common/input-componets";
import TextComp from "src/components/common/text-componets";

const VisualIdentityAndProjectContents = () => {
  return (
    <>
      <div className="relative bg-whiteColor w-[1120px] h-[1438px] top-[269px] -left-[260px] rounded-[16px]">
        <div className="relative w-[526px] h-[120px] top-[97px] -left-[260px] space-y-9">
          <div>
            <TextComp text={"الهوية البصرية و محتويات المشروع"} />
          </div>
          <div className="">
            <Input
              label={"شعار الشركة"}
              type={"text"}
              disabled={false}
              placeholder={"أرفق ملف أو قم بإسقاطه هنا"}
            />
            <Input
              label={"ملف الهوية البصرية"}
              type={"text"}
              disabled={false}
              placeholder={"أرفق ملف أو قم بإسقاطه هنا"}
            />
            <Input
              label={"محتوى المشروع "}
              type={"textarea"}
              disabled={false}
              placeholder={"أرفق ملف أو قم بإسقاطه هنا"}
            />
          </div>
          <div>
            <TextComp text={"معلومات اضافية عن  المشروع"} />
          </div>

          <div className="grid grid-rows-1  font-cairoRegular text-[16px] w-[377px]">
            <form className="flex justify-between ">
              <label>
                <input type="checkbox" id="checkbox" value="" />
                تطبيق
              </label>
              <label>
                <input type="checkbox" id="checkbox" value="" />
                موقع الكتروني
              </label>
              <label>
                <input type="checkbox" id="checkbox" value="" />
                لوحة تحكم
              </label>
            </form>
          </div>
          <div><Input
              label={"خريطة الموقع او رحلة المستخدم"}
              type={"textarea"}
              disabled={false}
              placeholder={"أرفق ملف أو قم بإسقاطه هنا"}
            />
          </div>
          <div><Input
              label={"المنافسين"}
              type={"textarea"}
              disabled={false}
              placeholder={"أرفق ملف أو قم بإسقاطه هنا"}
            />
          </div>
          <div>
            <Button disabled={false} text={"التالي"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisualIdentityAndProjectContents;
