<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Field from "$lib/components/ui/field/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { apply } from "./apply.remote";
</script>

<main>
	<div class="w-full max-w-md">
		<form {...apply}>
			<Field.Set>
				<Field.Group>
					<Field.Field>
						<Field.Label for="teamnumber">Team Number</Field.Label>
						<Input id="teamnumber" placeholder="1014" {...apply.fields.teamNumber.as("number")} />
					</Field.Field>
					<Field.Field>
						<Field.Label for="email">Contact Email</Field.Label>
						<Input id="email" placeholder="mail@example.com" {...apply.fields.email.as("email")} />
					</Field.Field>
				</Field.Group>
				<Field.Field>
				    <Button type="submit">Submit</Button>
				</Field.Field>
			</Field.Set>
		</form>
	</div>
</main>
