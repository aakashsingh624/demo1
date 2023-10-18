import React from "react";

export default function Payment() {
    return (
        <div>
            <form action="https://www.escrow.com/checkout" method="post">
                <input type="hidden" name="type" value="domain_name" />
                <input
                    type="hidden"
                    name="non_initiator_email"
                    value="admin@mtlegalteam.com"
                />
                <input type="hidden" name="non_initiator_id" value="2921023" />
                <input type="hidden" name="non_initiator_role" value="seller" />
                <input type="hidden" name="title" value="DUMMY TRANSACTION" />
                <input type="hidden" name="currency" value="USD" />
                <input
                    type="hidden"
                    name="domain"
                    value="https://mt-legal-frontend-ediopersolutions.vercel.app"
                />
                <input type="hidden" name="price" value="120" />
                <input type="hidden" name="concierge" value="false" />
                <input type="hidden" name="with_content" value="false" />
                <input type="hidden" name="inspection_period" value="1" />
                <input type="hidden" name="fee_payer" value="buyer" />
                <input
                    type="hidden"
                    name="return_url"
                    value="https://www.google.co.in"
                />
                <input type="hidden" name="button_types" value="buy_now" />
                <input type="hidden" name="auto_accept" value="" />
                <input type="hidden" name="auto_reject" value="" />
                <input type="hidden" name="item_key" value="undefined" />
                <button className="EscrowButtonSecondary" type="submit">
                    Buy It Now
                </button>
                <img
                    src="https://t.escrow.com/1px.gif?name=bin&price=120&title=DUMMY%20TRANSACTION&user_id=2921023"
                    style={{ display: "none" }}
                />
            </form>
        </div>
    );
}
