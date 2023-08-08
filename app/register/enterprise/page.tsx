import { schemaJson } from '#/lib/constants';
import AddDataForm from '#/ui/form/AddDataForm'

export default function Page() { 
  
	return (
		<AddDataForm schemaObj={schemaJson['Enterprise']}/>
	);
}