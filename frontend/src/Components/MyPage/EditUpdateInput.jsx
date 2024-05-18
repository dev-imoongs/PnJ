
const EditUpdateInput = ({ content, type, value, readOnly, placeholder }) => {
    return (
      <>
        <div>
          <p className="content_primary font_label_bold_md mb-[8px]">{content}</p>
          <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
            <input
              className="font_label_bold_md h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
              type={type}
              // value="ailak@naver.com"
              value={value}
              readOnly={readOnly}
              placeholder={placeholder}
            />
          </label>
        </div>
      </>
    );
  };

  export default EditUpdateInput;