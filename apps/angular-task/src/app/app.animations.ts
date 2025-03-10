import { animate, query, style, transition, trigger } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, scale: 0.9 })
        ], { optional: true }),
        query(':leave', [
            animate('0.2s', style({ opacity: 0, scale: 0.9 }))
        ], { optional: true }),
        query(':enter', [
            animate('0.2s', style({ opacity: 1, scale: 1 }))
        ], { optional: true }),
    ])
]);

export const elementTransitions = trigger('elementTransitions', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('0.2s', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('0.2s', style({ opacity: 0 }))
        ])
]);
