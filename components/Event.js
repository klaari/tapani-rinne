import PropTypes from "prop-types";
import {
    formatPublishedDateForDisplay,
    formatPublishedDateForDateTime,
} from "@lib/Date";

function Description({ event }) {
    if (!event.url) {
        return (
            <>
                {event.description}, {event.location}
            </>
        );
    }

    return (
        <a href={event.url}>
            {event.description}, {event.location}
        </a>
    );
}
Description.propTypes = {
    event: PropTypes.object,
};

export default function Event({ event }) {
    return (
        <li key={event.id}>
            <p className="event">
                <time dateTime={formatPublishedDateForDateTime(event.date)}>
                    {formatPublishedDateForDisplay(event.date)}
                </time>
                <Description event={event} />
            </p>
        </li>
    );
}

Event.propTypes = {
    event: PropTypes.object,
};
