import * as message_flags from "./message_flags.ts";
import type {Message} from "./message_store.ts";

export function editable_by_others(message: Message) : void {
	message.editable_by_others = true;
	message_flags.let_editable_by_others(message);
}

export function not_editable_by_others(message: Message) : void {
	message.editable_by_others = false;
	message_flags.dont_let_editable_by_others(message);
}