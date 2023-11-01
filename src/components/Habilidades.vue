<script lang="ts" setup>
defineProps({
    skill: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
    <div class="flow-root">
        <dl class="-my-3 divide-y divide-gray-100 text-sm">
            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">{{ skill.Skill }}</dt>
                <dd class="text-gray-700 sm:col-span-2">Mr</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">Proficiency</dt>
                <dd class="text-gray-700 sm:col-span-2">{{ skill.Proficiency }}</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">Used in</dt>
                <dd class="text-gray-700 sm:col-span-2">{{skill.Org}}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">Bio</dt>
                <dd class="text-gray-700 sm:col-span-2">
                    {{skill.Details}}
                </dd>
            </div>
        </dl>
    </div>
    </div>
</template>