<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import Button from '../button';
	import { DRAWER_CONTEXT_ID } from './Drawer.svelte';
	import { useContext } from '../../utils/useContext';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: DRAWER_CONTEXT_ID,
		parent: 'Drawer',
		component: 'DrawerHeader'
	});
	const { handleClose }: { handleClose: () => void } = getContext(DRAWER_CONTEXT_ID);

	const defaultClass =
		'px-4 sm:px-6 py-4 shadow-md dark:shadow-black flex-shrink text-lg font-medium text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="flex items-start justify-between">
		<h2>
			<slot />
		</h2>
		<!-- TODO: pull out to allow for customization? -->
		{#if handleClose}
			<div class="ml-3 flex h-7 items-center">
				<Button ariaLabel="close" type="ghost" on:click={handleClose} shape="circle">
					<Button.Icon slot="icon" icon="close" />
				</Button>
			</div>
		{/if}
	</div>
</div>
