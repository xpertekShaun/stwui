import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'success' | 'error' | 'default'",
		default: 'default'
	},
	{
		id: '2',
		prop: 'type',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'avatar',
		component: '<Chip.Avatar slot="avatar" />'
	},
	{
		id: '2',
		slot: 'label',
		component: '<Chip.Label slot="label" />'
	},
	{
		id: '3',
		slot: 'close',
		component: '<Chip.Close slot="close" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
	}
];

export const avatarProps: Prop[] = [
	{
		id: '1',
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'alt',
		type: 'string',
		default: 'user-avatar'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Chip } from 'stwui';
</script>

<Chip size="xs">
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
</Chip>
<Chip size="sm" type="success">
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
</Chip>

<Chip type="warn">
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
</Chip>
<Chip size="lg" type="error">
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
</Chip>
<Chip size="xl">
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
</Chip>`;

export const closeExample = `
<script lang="ts">
	import { Chip } from 'stwui';
</script>

<Chip type="info">
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
   <Chip.Close slot="close" />
</Chip>
<Chip>
   <Chip.Avatar slot="avatar" src="image.png" />
   <Chip.Label slot="label">Castor Troy</Chip.Label>
   <Chip.Close slot="close" />
</Chip>`;
