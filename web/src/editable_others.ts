import * as message_flags from "./message_flags.ts";
import { Message } from "./message_store";

export function editable_by_others(message: Message) : void {
	message.editable_by_others = true;
	message_flags.editable_by_others(message);
}

export function not_editable_by_others(message: Message) : void {
	message.editable_by_others = false;
	message_flags.not_editable_by_others(message);
}