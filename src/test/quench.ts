import {shadowrunRulesModifiers} from "./sr5.Modifiers.spec";
import {shadowrunSR5Item} from "./sr5.SR5Item.spec";
import {shadowrunMatrix} from "./sr5.Matrix.spec";
import {shadowrunSR5Actor} from "./sr5.SR5Actor.spec";
import {shadowrunSR5ActorDataPrep} from "./sr5.ActorDataPrep.spec";
import {shadowrunSR5ActiveEffect} from "./sr5.ActiveEffect.spec";
import {shadowrunNetworkDevices} from "./sr5.NetworkDevices.spec";
import {shadowrunTesting} from "./sr5.Testing.spec";
import {shadowrunInventoryFlow} from "./sr5.Inventory.spec";


/**
 * Register FoundryVTT Quench test batches...
 *
 * https://github.com/Ethaks/FVTT-Quench
 */
export const quenchRegister = (quench) => {
    if (!quench) return;

    console.warn('Shadowrun 5e | Be aware that FoundryVTT will tank in update performance when a lot of documents are in collections. This is the case if you have all Chummer items imported and might cause tests to cross the 2000ms quench timeout threshold. Clear those collections in a test world. :)');

    quench.registerBatch("shadowrun4e.rules.matrix", shadowrunMatrix, {displayName: "shadowrun4e: Matrix Test"});
    quench.registerBatch("shadowrun4e.rules.modifiers", shadowrunRulesModifiers, {displayName: "shadowrun4e: Modifiers Test"});
    quench.registerBatch("shadowrun4e.entities.items", shadowrunSR5Item, {displayName: "shadowrun4e: SR5Item Test"});
    quench.registerBatch("shadowrun4e.entities.actors", shadowrunSR5Actor, {displayName: "shadowrun4e: SR5Actor Test"});
    quench.registerBatch("shadowrun4e.entities.effects", shadowrunSR5ActiveEffect, {displayName: "shadowrun4e: SR5ActiveEffect Test"});
    quench.registerBatch("shadowrun4e.data_prep.actor", shadowrunSR5ActorDataPrep, {displayName: "shadowrun4e: SR5ActorDataPreparation Test"});
    quench.registerBatch("shadowrun4e.flow.networkDevices", shadowrunNetworkDevices, {displayName: "shadowrun4e: Matrix Network Devices Test"});
    quench.registerBatch("shadowrun4e.flow.inventory", shadowrunInventoryFlow, {displayName: "shadowrun4e: InventoryFlow Test"});
    quench.registerBatch("shadowrun4e.flow.tests", shadowrunTesting, {displayName: "shadowrun4e: SuccessTest Test"});
};
