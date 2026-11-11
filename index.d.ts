export type Options = {
	/**
	Preserve the original case instead of lowercasing.

	@default false

	@example
	```
	import humanizeString from 'humanize-string';

	humanizeString('The-NetApp-Guide-to-Kubernetes');
	//=> 'The net app guide to kubernetes'

	humanizeString('The-NetApp-Guide-to-Kubernetes', {preserveCase: true});
	//=> 'The NetApp Guide to Kubernetes'
	```
	*/
	readonly preserveCase?: boolean;

	/**
	A list of acronyms to keep in the exact casing given, matched case-insensitively against each word.

	@example
	```
	import humanizeString from 'humanize-string';

	humanizeString('api_url_parser', {acronyms: ['API', 'URL']});
	//=> 'API URL parser'
	```
	*/
	readonly acronyms?: readonly string[];
};

/**
Convert a camelized/dasherized/underscored string into a humanized one: `fooBar-Baz_Faz` → `Foo bar baz faz`.

@param text - The string to make human readable.

@example
```
import humanizeString from 'humanize-string';

humanizeString('fooBar');
//=> 'Foo bar'

humanizeString('foo-bar');
//=> 'Foo bar'

humanizeString('foo_bar');
//=> 'Foo bar'
```
*/
export default function humanizeString(text: string, options?: Options): string;
