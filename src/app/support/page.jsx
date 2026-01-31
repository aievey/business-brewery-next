import PageContainer from "@/components/page-container";
import Button from "@/components/ui/button";
import { handleForm } from "@/lib/formhandler";
import { mainForm } from "@/lib/forms";

const Support = () => {
  return (
    <PageContainer>
      <form action={handleForm}>
        {mainForm.map((form) => (
          <fieldset key={form.id}>
            <legend>{form.sectionTitle}</legend>

            {form.inputFields
              ? form.inputFields.map((field) => (
                  <div key={field.id}>
                    <label>{field.inputName}</label>
                    <input
                      className="bg-stone-200"
                      type={field.inputType}
                      name={field.id}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))
              : form.inputCategories.map((categories) => (
                  <fieldset
                    className="border-2 bg-amber-300"
                    key={categories.id}
                  >
                    <legend>{categories.id}</legend>
                    {categories.options ? (
                      categories.options.map((option) => (
                        <div key={option.id}>
                          <input
                            type={categories.type}
                            name={categories.name}
                            value={option.value}
                          />
                          <label>{option.value}</label>
                        </div>
                      ))
                    ) : (
                      <textarea
                        className="h-30 w-full"
                        name={categories.name}
                        placeholder={categories.placeholder}
                      />
                    )}
                  </fieldset>
                ))}
          </fieldset>
        ))}
        <Button width="w-40">Submit</Button>
      </form>
    </PageContainer>
  );
};
export default Support;
