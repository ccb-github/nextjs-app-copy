import Link from "next/link";
import Script from "next/script";
import AddDataForm from "#/ui/AddDataForm";
import { schemaJson } from "#/lib/demos";
import { toSchemaTypestring } from "#/lib/stringFactory";
console.log({schemaJson})
//<AddDataForm schemaObj={schemaJson["Enterprise"]}/>
type PageProps = {
	params: {
		type: string
	}
}
export default function Page( {params} : PageProps) {
	const { type }: {type: string} = params
	console.log(`Page ${type} ${toSchemaTypestring(type)}`, )
	return (
	  <div className="space-y-8">
		<AddDataForm schemaObj={schemaJson[toSchemaTypestring(type)]}/>
	  </div>
	);
}